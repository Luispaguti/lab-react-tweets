// import ProfileImage from "./ProfileImage";
// import User from "./User";
// import Timestamp from "./Timestamp";
// import Message from "./Message";
// import Actions from "./Actions";


// function Tweet(props) {
//   return (
//     <div className="tweet">
//       <img
//         src={img}
//         className="profile"
//         alt="profile"
//       />

//       <div className="body">
//         <div className="top">
//           <span className="user">
//             <span className="name">{name}</span>
//             <span className="handle">{handle}</span>
//           </span>

//           <span className="timestamp">Nov 30, 2020</span>
//         </div>

//         <p className="message">
//           On December 7th, we will be hosting a #webinar that will introduce you
//           to #SQL! Are you ready? 🚀
//         </p>

//         <div className="actions">
//           {/* Font Awesome icons */}
//           <i class="far fa-comment"></i>
//           <i class="fas fa-retweet"></i>
//           <i class="far fa-heart"></i>
//           <i class="fas fa-share"></i>
//         </div>
//       </div>

//       <i class="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }

// export default Tweet;



import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  return (
    <div className="tweet">
  
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={props.tweet.user}/>
          <Timestamp time={props.tweet.timestamp}/>
        </div>

        
        <Message message={props.tweet.message} />

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
