import React, { useState } from 'react';
import { Heart, Share2, MessageCircle } from 'lucide-react';

const InteractiveCard = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src="/api/placeholder/64/64"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-xl font-medium text-gray-900">Scott Grisak</h3>
            <p className="text-gray-500">Frontend Dev</p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600">
          Building user experiences with React and modern web technologies.
          A reignited passion for learning and growing.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
            />
            <span>{likes}</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
            
            {showShareMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Share on Twitter
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Share on LinkedIn
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Copy Link
                </a>
              </div>
            )}
          </div>

          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;