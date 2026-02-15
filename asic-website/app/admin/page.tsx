'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { X, Upload, Trash2, LogOut } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImage, setNewImage] = useState({ src: '', alt: '', caption: '' });

  // Hardcoded credentials
  const ADMIN_USERNAME = 'asic_admin';
  const ADMIN_PASSWORD = 'ASIC@2026!';

  useEffect(() => {
    // Check if already logged in
    const auth = localStorage.getItem('asic_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadImages();
    }
  }, []);

  const loadImages = () => {
    const stored = localStorage.getItem('asic_gallery_images');
    if (stored) {
      setImages(JSON.parse(stored));
    }
  };

  const saveImages = (updatedImages: GalleryImage[]) => {
    localStorage.setItem('asic_gallery_images', JSON.stringify(updatedImages));
    setImages(updatedImages);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem('asic_admin_auth', 'true');
      setIsAuthenticated(true);
      setError('');
      loadImages();
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('asic_admin_auth');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const handleAddImage = () => {
    if (!newImage.src || !newImage.alt) {
      alert('Please fill in image URL and alt text');
      return;
    }

    // Convert Google Drive link to direct link
    let imageSrc = newImage.src;
    
    // Check if it's a Google Drive link
    if (imageSrc.includes('drive.google.com')) {
      // Extract file ID from various Google Drive URL formats
      let fileId = '';
      
      // Format: https://drive.google.com/file/d/FILE_ID/view
      if (imageSrc.includes('/file/d/')) {
        fileId = imageSrc.split('/file/d/')[1].split('/')[0];
      }
      // Format: https://drive.google.com/open?id=FILE_ID
      else if (imageSrc.includes('open?id=')) {
        fileId = imageSrc.split('open?id=')[1].split('&')[0];
      }
      // Format: https://drive.google.com/uc?id=FILE_ID
      else if (imageSrc.includes('uc?id=')) {
        fileId = imageSrc.split('uc?id=')[1].split('&')[0];
      }
      
      if (fileId) {
        // Convert to direct link
        imageSrc = `https://drive.google.com/uc?export=view&id=${fileId}`;
      }
    }

    const image: GalleryImage = {
      id: Date.now().toString(),
      src: imageSrc,
      alt: newImage.alt,
      caption: newImage.caption,
    };

    const updatedImages = [...images, image];
    saveImages(updatedImages);
    setNewImage({ src: '', alt: '', caption: '' });
  };

  const handleDeleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      const updatedImages = images.filter(img => img.id !== id);
      saveImages(updatedImages);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A3A6B 100%)' }}>
        <div className="w-full max-w-md p-8 rounded-2xl" style={{ background: 'white' }}>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#1A3A6B' }}>ASIC Admin</h1>
            <p className="text-gray-600">Gallery Management</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#1A3A6B' }}>
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C518]"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#1A3A6B' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C518]"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{ background: '#F5C518', color: '#0D1B2A' }}
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-sm text-gray-600 hover:text-[#1A3A6B]"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16" style={{ background: '#F0F4F8' }}>
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold" style={{ color: '#1A3A6B' }}>
            Gallery Management
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
            style={{ background: '#1A3A6B', color: 'white' }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Add New Image */}
        <div className="bg-white p-6 rounded-xl mb-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#1A3A6B' }}>
            Add New Image
          </h2>
          
          {/* Instructions */}
          <div className="mb-4 p-4 rounded-lg" style={{ background: '#F0F4F8' }}>
            <p className="text-sm font-semibold mb-2" style={{ color: '#1A3A6B' }}>
              📌 How to use Google Drive images:
            </p>
            <ol className="text-sm text-gray-700 space-y-1 ml-4 list-decimal">
              <li>Upload image to Google Drive</li>
              <li>Right-click → Get link → Change to "Anyone with the link"</li>
              <li>Copy the link and paste below (will auto-convert to direct link)</li>
            </ol>
            <p className="text-xs text-gray-500 mt-2">
              Supported formats: https://drive.google.com/file/d/FILE_ID/view or any Google Drive link
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <input
                type="text"
                value={newImage.src}
                onChange={(e) => setNewImage({ ...newImage, src: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C518]"
                placeholder="Google Drive link or /images/event.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Alt Text</label>
              <input
                type="text"
                value={newImage.alt}
                onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C518]"
                placeholder="Event description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Caption</label>
              <input
                type="text"
                value={newImage.caption}
                onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C518]"
                placeholder="Event caption"
              />
            </div>
          </div>
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors"
            style={{ background: '#F5C518', color: '#0D1B2A', fontWeight: 600 }}
          >
            <Upload className="w-4 h-4" />
            Add Image
          </button>
        </div>

        {/* Image List */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#1A3A6B' }}>
            Current Images ({images.length})
          </h2>
          
          {images.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No images yet. Add your first image above.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative group rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <p className="font-medium text-sm mb-1">{image.alt}</p>
                    <p className="text-xs text-gray-600">{image.caption}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteImage(image.id)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/')}
            className="text-sm text-gray-600 hover:text-[#1A3A6B]"
          >
            ← Back to Home
          </button>
        </div>
      </Container>
    </div>
  );
}
