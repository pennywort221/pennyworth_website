const fs = require('fs');
fetch('https://hahdqf9u.api.sanity.io/v2024-01-01/data/query/production?query=%2A%5B_type%3D%3D%22blog%22%5D%5B0%5D')
    .then(res => res.json())
    .then(data => {
        fs.writeFileSync('sanity-blog.json', JSON.stringify(data, null, 2));
        console.log('done');
    });
