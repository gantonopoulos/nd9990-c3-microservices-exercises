function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    const alternative = process.env["ALTERNATIVE"];
    console.log("But:"+`${alternative}`+ " is better")
    await sleep(5000);
  }
}

main();
