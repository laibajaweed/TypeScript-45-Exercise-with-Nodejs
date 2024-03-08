var personName = "kamran  tessori";
console.log("lowercase", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
