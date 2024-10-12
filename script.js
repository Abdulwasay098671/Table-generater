let num =+ prompt("enter any num")


for(i = 1; i < num; i++){

    let table = ""

    for(b = 1; b <= 10 ; b++){

     table = table + i + "x" + b + "=" + i * b + "<br />"

    }

   table = table + "<br />"    
   document.write(table)
}