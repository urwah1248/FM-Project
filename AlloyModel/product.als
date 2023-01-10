sig id{}
sig name{}
sig price{}
sig description{}
sig image{}

sig size{}
sig shoesize{}
sig shirtcolor{}
sig shoecolor{}
sig brand{}
sig dial{}
sig style{}

abstract sig product{
  id: one id,
  name: one name,
  price: one price,
  description: one description,
  image: one image
}


sig shoes extends product{
  size: some shoesize,
  color: some shoecolor
}

sig shirt extends product{
  color: some shirtcolor,
  size: some size
}

sig watch extends product{
  dial: one dial,
  brand: one brand,
  style: one style
}

fact mustHaves{
  #product > 0
  #product != 0
  #shoesize < 3
  #shoecolor < 3 && #shirtcolor < 3
}

fact uniqueID {
  #(product.id) = #product
  #(product.name) = #product
  #(product.description) = #product
  #(product.image) = #product
  #(product.price) = #product
}

fact atleastOneShoe {
    some shoes
}

fact atleastOneClothing {
    some shirt
}

fact atleastOneWatch {
    some watch
}

pred generate{
  
}

run {}