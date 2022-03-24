let blogs = []


function addBlog(event) {

    event.preventDefault()

    let name = document.getElementById('input-project').value
    let start = document.getElementById('input-start-date').value
    let end = document.getElementById('input-end-date').value
    let description = document.getElementById('input-description').value
    let radio = document.getElementById('input-radio').value
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0])

    let blog = {
        name: name,
        start: start,
        end: end,
        description: description,
        radio: radio,
        image: image,
    }

        blogs.push(blog)
        console.log(blogs);

renderBlog()

}

function renderBlog() {

    document.getElementById('contents').innerHTML = ''

    for (let dataBlog = 0; dataBlog < blogs.length; dataBlog++) {

        document.getElementById('contents').innerHTML +=
        `
            <div class="blog-list-item">
                <div class="blog-image">
                <img src=${blogs[dataBlog].image} alt="" />
                </div>
                <div class="blog-description">
                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${blogs[dataBlog].name}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    12 Jul 2021 22:30 WIB | Farhan AfifFendi
                </div>
                <p>
                    ${blogs[dataBlog].description}
                </p>
                </div>
                <h2> Start Date
                    ${blogs[dataBlog].start}
                </>
                <h2> End Date
                    ${blogs[dataBlog].end}
                </h2>
                 <div class="btn-group">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-post">Delete</button>
                </div>
                </div>
               
            </div>
        `
    }

}


