for (let i=0; i < n-1; i++){
    for (let j=n-1-i; j > 0; j--){
        process.stdout.write(`  `)
    }for (let j=0; j<=i; j+=1){
        process.stdout.write(`* `)
    } for (let j=0; j<i; j+=1){
        process.stdout.write(`* `)
    }console.log()
}
for (let i=0; i<n; i++){
    for (let j=0; j<i; j++){
        process.stdout.write(`  `)
    }for(let j=0;j< n-i; j++){
        process.stdout.write(`* `)
    }for (let j=0;j< n-i-1; j++){
        process.stdout.write(`* `)
    }
    console.log()
}
