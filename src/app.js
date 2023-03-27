const genDomain = () => {
  const pronoun = ['the', 'our', 'your', 'their', 'my', 'this'];
  const adj = ['glass', 'cold', 'nice', 'round', 'wonderful'];
  const noun = ['dwelling', 'campus'];
  const ext = ['io', 'co', 'dev', 'xyz', 'org', 'app', 'us']
  let aux;
  let aux2;

  pronoun.forEach(a => {
    adj.forEach(b => {
      noun.forEach(c => {
        ext.forEach(d => {

          console.log(a + b + c + '.' + d);
          document.write(a + b + c + '.' + d + "<br>");

          aux = c.split("").splice(c.length - d.length, d.length).join("");
          aux2 = c.split("").splice(0, c.length - d.length).join("");

          if (d === aux) {
            console.log(a + b + aux2 + '.' + d);
            document.write(a + b + aux2 + '.' + d + "<br>");
          }

        });
        console.log("\n");
        document.write("<br>")
      });
    });
  });
}

genDomain();