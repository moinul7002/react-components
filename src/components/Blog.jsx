import * as bootstrap from "https://cdn.skypack.dev/bootstrap@4.6.0";

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
        <li key={post.emp_id}>{post.name}</li> 
      )}
    </ul>
  );
  
  const content = props.posts.map((post) => 
    <div key={post.emp_id}>
      <h2>{post.name}</h2>
      <p>{post.designation}</p>
    </div>
  );
  
  return (
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-12">
                <div class="nav d-block">
                  {sidebar}
                </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-12">
                <div class="content">
                  {content}
                </div>
            </div>
        </div>
    </div>
  );
}
                                    
const data = [
             {emp_id: 1, name:'Md. Moinul Islam', designation:'Junior Software Engineer'},
             {emp_id: 2, name:'Shajid Jeshan', designation:'Junior Software Engineer'},
             {emp_id: 3, name:'Imon Hasan', designation:'Junior Software Engineer'},
];
                                   
ReactDOM.render (
  <Blog posts={data} />,
  document.getElementById('root')
);