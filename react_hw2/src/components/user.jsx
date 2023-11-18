
import Info from "./info";
function User({username,age,subject}){
return(
<div className="container">
<Info />
<p>User name:{username}</p>
<p>Age:{age}</p>
<p>Subject:</p>
<ul className="user_content">
{subject.map((subject,index) => (
<>
<li key={index}>{subject}</li>
{index < subject.length-1}
</>
))}
</ul>
</div>
);
}
export default User;