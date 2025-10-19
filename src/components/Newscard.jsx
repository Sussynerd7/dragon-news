import { FaEye, FaStar } from "react-icons/fa";

export default function Newscard({ news }) {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    others,
  } = news;

  return (
    <div className="max-w-[448px]  bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        {others.is_trending && (
          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md">
            Trending
          </span>
        )}
      </div>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{details}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <FaStar className="text-yellow-500" />
          <span className="font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEye />
          <span>{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
