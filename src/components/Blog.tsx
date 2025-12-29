import { ExternalLink, Calendar, Clock, Tag, BookOpen, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Build a Simple Snake Game in Flutter: A Step-by-Step Guide",
      excerpt: "Learn how to create a classic Snake game using Flutter from scratch. This comprehensive tutorial covers game mechanics, collision detection, score tracking, and smooth animations to build an engaging mobile game experience.",
      date: "2025-06-12",
      readTime: "3 min read",
      tags: ["Flutter", "Game Development", "Mobile", "Dart"],
      url: "https://medium.com/@sijalneupane5/build-a-simple-snake-game-in-flutter-a-step-by-step-guide-0718168abe56",
      platform: "Medium",
      featured: false,
      category: "Tutorial"
    },
    {
      title: "Flutter Monorepo from Scratch (2025) going into 2026: Pub Workspaces + Melos Explained Properly",
      excerpt: "Discover how to set up a Flutter monorepo using Pub Workspaces and Melos. This article provides a clear explanation of the benefits, setup process, and best practices for managing multiple Flutter packages in a single repository.",
      date: "2025-12-28",
      readTime: "4 min read",
      tags: ["Flutter", "Monorepo", "Melos", "Pub Workspaces"],
      url: "https://medium.com/@sijalneupane5/flutter-monorepo-from-scratch-2025-going-into-2026-pub-workspaces-melos-explained-properly-fae98bfc8a6e",
      platform: "Medium",
      featured: true,
      category: "Tutorial"
    },
    // You can add more blog posts here in the future
  ];
  blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  blogPosts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  const formatDate = (dateString: string) => {
    const options = { year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Articles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog & Tutorials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring development insights, sharing tutorials, and documenting my tech journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full">
                  ⭐ FEATURED
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Content Side */}
                <div className="flex-1">
                  {/* Category & Platform */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      Published on {post.platform}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
                    {/* Meta Info */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium">Published</p>
                          <p className="text-sm">{formatDate(post.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Clock className="w-5 h-5 mr-3 text-green-500" />
                        <div>
                          <p className="text-sm font-medium">Reading Time</p>
                          <p className="text-sm">{post.readTime}</p>
                        </div>
                      </div>
                    </div>

                    {/* Read Button */}
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 group"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </article>
          ))}
        </div>

        {/* Call to Action - Different Design */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with My Latest Posts
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow my Medium profile to get notified about new tutorials, development insights, and project walkthroughs.
            </p>
            <a
              href="https://medium.com/@sijalneupane5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 text-blue-500" />
              Follow on Medium
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;