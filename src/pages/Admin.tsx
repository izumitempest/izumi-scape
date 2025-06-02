
import { useState } from 'react';
import { Upload, Plus, Film, Users, TrendingUp, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Admin = () => {
  const [newContent, setNewContent] = useState({
    title: '',
    year: '',
    genre: '',
    rating: '',
    description: '',
    type: 'movie',
    category: '',
    poster: null as File | null,
    videoFile: null as File | null
  });

  const [stats] = useState({
    totalMovies: 156,
    totalSeries: 43,
    totalUsers: 2847,
    totalViews: 89432
  });

  const handleContentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New content submission:', newContent);
    // Here you would upload to your backend/database
    alert('Content uploaded successfully!');
    setNewContent({
      title: '',
      year: '',
      genre: '',
      rating: '',
      description: '',
      type: 'movie',
      category: '',
      poster: null,
      videoFile: null
    });
  };

  const handleFileChange = (field: 'poster' | 'videoFile', file: File | null) => {
    setNewContent({ ...newContent, [field]: file });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-white/60">Manage your streaming platform content</p>
            </div>
            <Badge className="bg-purple-600 text-white">
              <Settings className="w-4 h-4 mr-1" />
              Admin Mode
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Total Movies</p>
                  <p className="text-white text-2xl font-bold">{stats.totalMovies}</p>
                </div>
                <Film className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Total Series</p>
                  <p className="text-white text-2xl font-bold">{stats.totalSeries}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Total Users</p>
                  <p className="text-white text-2xl font-bold">{stats.totalUsers}</p>
                </div>
                <Users className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Total Views</p>
                  <p className="text-white text-2xl font-bold">{stats.totalViews.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/5">
            <TabsTrigger value="upload" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              Upload Content
            </TabsTrigger>
            <TabsTrigger value="manage" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              Manage Content
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              User Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Upload New Content
                </CardTitle>
                <CardDescription className="text-white/60">
                  Add movies, series, or animated content to your platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-white">Title</Label>
                      <Input
                        id="title"
                        type="text"
                        placeholder="Enter content title"
                        value={newContent.title}
                        onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-white">Release Year</Label>
                      <Input
                        id="year"
                        type="number"
                        placeholder="2024"
                        value={newContent.year}
                        onChange={(e) => setNewContent({ ...newContent, year: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="genre" className="text-white">Genre</Label>
                      <Input
                        id="genre"
                        type="text"
                        placeholder="Action, Drama, Sci-Fi"
                        value={newContent.genre}
                        onChange={(e) => setNewContent({ ...newContent, genre: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rating" className="text-white">Rating</Label>
                      <Input
                        id="rating"
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        placeholder="8.5"
                        value={newContent.rating}
                        onChange={(e) => setNewContent({ ...newContent, rating: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-white">Content Type</Label>
                      <Select value={newContent.type} onValueChange={(value) => setNewContent({ ...newContent, type: value })}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="movie">Movie</SelectItem>
                          <SelectItem value="series">TV Series</SelectItem>
                          <SelectItem value="animated">Animated Series</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-white">Category</Label>
                      <Select value={newContent.category} onValueChange={(value) => setNewContent({ ...newContent, category: value })}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="trending">Trending</SelectItem>
                          <SelectItem value="popular">Popular</SelectItem>
                          <SelectItem value="for-you">For You</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Enter content description..."
                      value={newContent.description}
                      onChange={(e) => setNewContent({ ...newContent, description: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="poster" className="text-white">Poster Image</Label>
                      <div className="glass-card border-white/20 border-dashed p-6 text-center">
                        <Upload className="w-8 h-8 text-white/60 mx-auto mb-2" />
                        <p className="text-white/60 text-sm mb-2">Upload poster image</p>
                        <Input
                          id="poster"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange('poster', e.target.files?.[0] || null)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="video" className="text-white">Video File</Label>
                      <div className="glass-card border-white/20 border-dashed p-6 text-center">
                        <Film className="w-8 h-8 text-white/60 mx-auto mb-2" />
                        <p className="text-white/60 text-sm mb-2">Upload video file</p>
                        <Input
                          id="video"
                          type="file"
                          accept="video/*"
                          onChange={(e) => handleFileChange('videoFile', e.target.files?.[0] || null)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Content
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Content Management</CardTitle>
                <CardDescription className="text-white/60">
                  View and manage all uploaded content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/60">Content management interface will be implemented here. This would include tables to view, edit, and delete existing content.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white">User Management</CardTitle>
                <CardDescription className="text-white/60">
                  Manage platform users and their permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/60">User management interface will be implemented here. This would include user lists, role management, and user analytics.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Back to Site Link */}
        <div className="mt-8 text-center">
          <a href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Back to StreamScape
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
