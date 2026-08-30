import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Share2, 
  Plus, 
  ShieldCheck, 
  Radio, 
  AlertTriangle,
  Send
} from 'lucide-react';
import { communityDiscussions } from '../data/agroscanData';

export const CommunityScreen = ({ onOpenExpertReview }) => {
  const [posts, setPosts] = useState(communityDiscussions);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const handleLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost = {
      id: `post-${Date.now()}`,
      author: 'Dr. Sarah (Field Sector 4B)',
      role: 'Farm Manager',
      avatar: '👩‍🌾',
      title: newTitle,
      content: newContent,
      time: 'Just now',
      likes: 1,
      replies: 0,
      tags: ['Field Observation', 'Soybeans'],
      verified: false,
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewContent('');
    setIsPosting(false);
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center space-x-2">
            <Users className="w-6 h-6 text-forest-800" />
            <span>Agronomist & Farmer Community</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Real-time regional outbreak alerts, treatment discussions, and verified agronomist advisory
          </p>
        </div>

        <button
          onClick={() => setIsPosting(!isPosting)}
          className="px-4 py-2 rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold shadow-sm flex items-center space-x-2 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 text-emerald-400" />
          <span>New Discussion</span>
        </button>
      </div>

      {/* Regional Outbreak Live Alert Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 flex items-start space-x-3.5">
        <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
          <AlertTriangle className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-amber-900">
            Regional Spore Alert: Midwest Potato & Tomato Corridor
          </h3>
          <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
            High relative humidity (85%+) in Iowa and Illinois is accelerating spore formation of Phytophthora infestans. Check lower canopy leaves across all sectors.
          </p>
        </div>
      </div>

      {/* New Post Form Drawer */}
      {isPosting && (
        <form onSubmit={handleCreatePost} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-3 animate-in fade-in">
          <h3 className="text-sm font-bold text-slate-900">Start a New Crop Discussion</h3>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Topic title (e.g. Blight treatment efficacy in Sector 7...)"
            className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
            required
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Describe your field observations, crop symptoms, or questions..."
            rows={3}
            className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsPosting(false)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-xl bg-forest-900 text-white text-xs font-bold hover:bg-forest-800 flex items-center space-x-1"
            >
              <Send className="w-3.5 h-3.5 text-emerald-400" />
              <span>Post</span>
            </button>
          </div>
        </form>
      )}

      {/* Community Feed Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-3 hover:border-slate-300 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg shadow-sm">
                  {post.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      {post.author}
                    </span>
                    {post.verified && (
                      <ShieldCheck className="w-4 h-4 text-emerald-600" title="Verified Agronomist" />
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400">{post.role} • {post.time}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-900">{post.title}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{post.content}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Interaction Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center space-x-1.5 hover:text-forest-800 transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{post.likes}</span>
                </button>
                <div className="flex items-center space-x-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{post.replies} Replies</span>
                </div>
              </div>

              <button
                onClick={onOpenExpertReview}
                className="text-[11px] font-bold text-forest-800 hover:underline"
              >
                Ask Extension Officer →
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
