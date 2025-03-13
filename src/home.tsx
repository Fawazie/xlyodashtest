import React from 'react';
import { Button } from '@/components/ui/button';
import { Wand2, TrendingUp, Users, Target } from 'lucide-react';

export function DashboardHome() {
  const stats = [
    { name: 'Total Ads Generated', value: '128', icon: Wand2, trend: '+12.5%' },
    { name: 'Average CTR', value: '3.2%', icon: TrendingUp, trend: '+2.3%' },
    { name: 'Total Reach', value: '24.5K', icon: Users, trend: '+18.2%' },
    { name: 'Conversion Rate', value: '2.4%', icon: Target, trend: '+4.1%' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Team!</h1>
        <Button size="lg">
          <Wand2 className="mr-2 h-5 w-5" />
          Create New Ad
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          {stat.trend}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 grid-cols-1 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent AI-Generated Ads</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Wand2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Summer Collection Ad #{i}</p>
                    <p className="text-sm text-gray-500">Generated 2 hours ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">AI Suggestions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="text-sm font-medium text-gray-900">Trending Topic #{i}</p>
                </div>
                <p className="text-sm text-gray-600">
                  Consider creating ads around summer fashion trends to capture seasonal interest.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}