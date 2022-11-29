
document
.getElementById('file')
.addEventListener('change', event => {
const files = event.target.files;
const formData = new FormData();
formData.append('image', files[0]);

fetch('http://localhost:3000/image/', {
method: 'POST',
body: formData,
})
.then(response => response.json())
.then(data => {
    console.log(data);
})

.catch(error => {
console.log(error);
});
}); 
