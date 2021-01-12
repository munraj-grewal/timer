const args = process.argv.slice(2);

if (args !==[]){
  args.forEach(timer => {
    if (timer >= 0 && Number(timer) !== NaN){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer*1000);
    }
  });
}