/* ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।  */

/* 
৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে।  */

/* ৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।  */

const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

const displayPhotos = photos => {
    photos = photos.slice(0, 20);
    const photosContainer = document.getElementById('photos-container');
    // console.log(photos);
    photos.forEach(photo => {
        console.log(photo)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
                    <div class="card">
                        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${photo.title}</h5>
                            <a href='${photo.url}' class='btn btn-primary' >See Url</a>
                            <button onclick="showDetails(${photo.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">See Album info</button>
                        </div>
                    </div>
                </div>
        `;
        photosContainer.appendChild(div);
    });
}

const showDetails = Id => {
    console.log(Id);
    const url = `https://jsonplaceholder.typicode.com/albums/${Id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showOnModal(data))
}

const showOnModal = info => {
    console.log(info)
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.innerText = info.title;
}

loadPhotos();