"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InstagramUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('instagram_access_token');
    if (token) {
      setAccessToken(token);
    } else {
      // Redirect to login if no token
      router.push('/instagram/login');
    }
  }, [router]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('video/')) {
        setError('Please select a video file');
        return;
      }
      
      // Validate file size (100MB limit)
      if (file.size > 100 * 1024 * 1024) {
        setError('Video file must be under 100MB');
        return;
      }
      
      setVideoFile(file);
      setError("");
    }
  };

  const handleUpload = async () => {
    if (!videoFile || !accessToken) {
      setError('Please select a video file and ensure you are logged in');
      return;
    }

    setIsLoading(true);
    setError("");
    setUploadStatus("Uploading video to cloud storage...");

    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('caption', caption);
      formData.append('access_token', accessToken);

      setUploadStatus("Creating Instagram media container...");
      
      const response = await fetch('/api/instagram/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadStatus("Video uploaded successfully!");
        setVideoFile(null);
        setCaption("");
        
        // Reset file input
        const fileInput = document.getElementById('video-input') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        
        setTimeout(() => {
          setUploadStatus("");
        }, 3000);
      } else {
        setError(data.error || 'Upload failed');
        setUploadStatus("");
      }
    } catch (err) {
      setError('Network error occurred');
      setUploadStatus("");
    } finally {
      setIsLoading(false);
    }
  };

  if (!accessToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Upload Video to Instagram
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Upload videos directly to your Instagram Business account
          </p>
        </div>

        {/* Upload Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 p-8">
            
            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white mb-3">
                Select Video File
              </label>
              <input
                id="video-input"
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full p-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
              />
              {videoFile && (
                <p className="text-green-400 text-sm mt-2">
                  Selected: {videoFile.name} ({(videoFile.size / (1024 * 1024)).toFixed(2)} MB)
                </p>
              )}
            </div>

            {/* Caption */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white mb-3">
                Caption (Optional)
              </label>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption for your video..."
                className="w-full p-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 resize-none h-24"
                maxLength={2200}
              />
              <p className="text-gray-400 text-sm mt-1">
                {caption.length}/2200 characters
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2">Video Requirements:</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Format: MP4 recommended</li>
                <li>• Maximum size: 100MB</li>
                <li>• Maximum duration: 60 seconds for feed posts</li>
                <li>• Minimum resolution: 720p</li>
              </ul>
            </div>

            {/* Upload Status */}
            {uploadStatus && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-semibold">{uploadStatus}</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 font-semibold">{error}</p>
              </div>
            )}

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!videoFile || isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Uploading...
                </div>
              ) : (
                'Upload to Instagram'
              )}
            </button>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <a
                href="/instagram/login"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Back to Login
              </a>
              <a
                href="/instagram"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Instagram Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 