import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <>
      {comment &&
        comment.map((item, i) => (
          <div key={item.id_comment} className="flex items-start pt-8">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://placeimg.com/80/80/people"
              alt="avatar"
            />
            <div className=" pb-3">
              <div className="flex items-center justify-between pt-2">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1 ">
                  {item.username}
                </h2>
              </div>
              <p className="mt-3 text-gray-700 text-sm pb-1">{item.content}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default CommentCard;
