
// API LINK
const url = `http://jsonplaceholder.typicode.com/posts`;

//counter veriable
let k=10;

let parent = document.getElementById('main-body');
let footer = document.getElementById('logo');
document.addEventListener('DOMContentLoaded',()=>{
    let options = {
        root: null,
        rootMargins: "0px",
        threshold: 0.5
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(document.querySelector("footer"));
      //an initial load of some data
    fetchData();
    
})
const handleIntersect = (entries)=> {
    if (entries[0].isIntersecting) {
        footer.style.backgroundColor = 'white';
        footer.innerHTML = `
        <div class="loader"></div>
        
        `;
        
      console.warn("something is intersecting with the viewport");
    //   Repetative Load from Fake REST API
        fetchData();
    }
  }
const fetchData = ()=>{
    if(k==120){
        k=10;
    }
    
    axios.get(`${url}?_start=${0}&_limit=${k}`)
    .then((res)=>{
        let datas = [];
        datas = res.data;
        
        let output=``;
        datas.map((data)=>{
            output+=`<div class="card border-primary m-3" style="max-width: 20rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h4 class="card-title">${data.title}</h4>
              <p class="card-text">${data.body}</p>
            </div>
          </div>`
            // console.log(data);
        })
        parent.innerHTML = output;
    });
    k = k+10;
    
    console.log(k);
}
