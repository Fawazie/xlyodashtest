import React, { useState } from 'react';
import { Button } from 'xlyo/src/components/ui/button.tsx';

import { 
  Image, 
  Film, 
  PlayCircle, 
  Target, 
  Palette, 
  TrendingUp, 
  MousePointerClick,
  Loader2
} from 'lucide-react';

type AdType = 'post' | 'story' | 'reel';
type AdStyle = 'minimalist' | 'playful' | 'luxury' | 'bold';

interface AdPreferences {
  type: AdType;
  audience: {
    age: string[];
    gender: string[];
    location: string;
    interests: string[];
  };
  style: AdStyle;
  cta: string;
}

export function AdGenerator() {
  const [generating, setGenerating] = useState(false);
  const [preferences, setPreferences] = useState<AdPreferences>({
    type: 'post',
    audience: {
      age: ['18-24'],
      gender: ['all'],
      location: 'worldwide',
      interests: [],
    },
    style: 'minimalist',
    cta: 'Shop Now',
  });

  const adTypes = [
    { id: 'post', name: 'Post', icon: Image, description: 'Static Image or Carousel' },
    { id: 'story', name: 'Story', icon: Film, description: '5-15 sec Vertical Video' },
    { id: 'reel', name: 'Reel', icon: PlayCircle, description: '15-60 sec Trend-Based Video' },
  ];

  const adStyles = [
    { id: 'minimalist', name: 'Minimalist', description: 'Clean and simple design' },
    { id: 'playful', name: 'Playful', description: 'Fun and energetic' },
    { id: 'luxury', name: 'Luxury', description: 'Premium and sophisticated' },
    { id: 'bold', name: 'Bold', description: 'Strong and impactful' },
  ];

  const handleGenerate = async () => {
    setGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGenerating(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Ad</h1>
          <p className="mt-2 text-sm text-gray-600">
            Generate AI-powered ads optimized for your target audience
          </p>
        </div>

        {/* Ad Type Selection */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900 flex items-center">
            <Film className="mr-2 h-5 w-5" />
            Select Ad Type
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {adTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setPreferences({ ...preferences, type: type.id as AdType })}
                className={`${
                  preferences.type === type.id
                    ? 'border-blue-500 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                } relative rounded-lg border bg-white p-4 shadow-sm focus:outline-none`}
              >
                <div className="flex items-center">
                  <type.icon className="h-6 w-6 text-blue-600" />
                  <div className="ml-4 text-left">
                    <p className="text-sm font-medium text-gray-900">{type.name}</p>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Audience */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Target className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Target Audience</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Age Range</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={preferences.audience.age[0]}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    audience: { ...preferences.audience, age: [e.target.value] }
                  })}
                >
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45+">45+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={preferences.audience.location}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    audience: { ...preferences.audience, location: e.target.value }
                  })}
                  placeholder="Enter location"
                />
              </div>
            </div>
          </div>

          {/* Style */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Palette className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Ad Style</h3>
            </div>
            <div className="space-y-2">
              {adStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setPreferences({ ...preferences, style: style.id as AdStyle })}
                  className={`${
                    preferences.style === style.id
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  } flex items-center w-full px-3 py-2 rounded-md border text-sm font-medium`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <MousePointerClick className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Call to Action</h3>
            </div>
            <div className="space-y-2">
              {['Shop Now', 'Learn More', 'Sign Up', 'Get Started'].map((cta) => (
                <button
                  key={cta}
                  onClick={() => setPreferences({ ...preferences, cta })}
                  className={`${
                    preferences.cta === cta
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  } flex items-center w-full px-3 py-2 rounded-md border text-sm font-medium`}
                >
                  {cta}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center pt-6">
          <Button
            size="lg"
            onClick={handleGenerate}
            disabled={generating}
            className="w-full sm:w-auto"
          >
            {generating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating Ad...
              </>
            ) : (
              <>
                <TrendingUp className="mr-2 h-5 w-5" />
                Generate AI Ad
              </>
            )}
          </Button>
        </div>

        {/* Preview Area (placeholder) */}
        {generating && (
          <div className="mt-8 bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-48 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}