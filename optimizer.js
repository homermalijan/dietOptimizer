function dietOptimizer(){
  alert("diet optimizer invoked");

  var items = [
    ["Frozen Broccoli", 0.16, 10, 73.8, 0, 0.8, 68.2, 13.6, 8.5, 8, 5867.4, 160.2, 159, 2.3],
    ["Carrots, Raw", 0.07, 0.5, 23.7, 0, 0.1, 19.2, 5.6, 1.6, 0.6, 15471, 5.1, 14.9, 0.3],
    ["Celery Raw", 0.04, 1, 6.4, 0, 0.1, 34.8, 1.5, 0.7, 0.3, 53.6, 2.8, 16, 0.2],
    ["Frozen Corn", 0.18, 0.5, 72.2, 0, 0.6, 2.5, 17.1, 2, 2.5, 106.6, 5.2, 3.3, 0.3],
    ["Lettuce, Iceberg, Raw", 0.02, 1, 2.6, 0, 0, 1.8, 0.4, 0.3, 0.2, 66, 0.8, 3.8, 0.1],
    ["Peppers, Sweet, Raw", 0.53, 1, 20, 0, 0.1, 1.5, 4.8, 1.3, 0.7, 467.7, 66.1, 6.7, 0.3],
    ["Potatoes, Baked", 0.06, 0.5, 171.5, 0, 0.2, 15.2, 39.9, 3.2, 3.7, 0, 15.6, 22.7, 4.3],
    ["Tofu", 0.31, 0.25, 88.2, 0, 5.5, 8.1, 2.2, 1.4, 9.4, 98.6, 0.1, 121.8, 6.2],
    ["Roast Chicken", 0.84, 1, 277.4, 129.9, 10.8, 125.6, 0, 0, 42.2, 77.4, 0, 21.9, 1.8],
    ["Spaghetti W/ Sauce", 0.78, 1.5, 358.2, 0, 12.3, 1237.1, 58.3, 11.6, 8.2, 3055.2, 27.9, 80.2, 20.3],
    ["Tomato, Red, Ripe, Raw", 0.27, 1, 25.8, 0, 0.4, 11.1, 5.7, 1.4, 1, 766.3, 23.5, 6.2, 0.6],
    ["Apple, Raw, W/ Skin", 0.24, 1, 81.4, 0, 0.5, 0, 21, 3.7, 0.3, 73.1, 7.9, 9.7, 0.2],
    ["Banana", 0.15, 1, 104.9, 0, 0.5, 1.1, 26.7, 2.7, 1.2, 92.3, 10.4, 6.8, 0.4],
    ["Grapes", 0.32, 10, 15.1, 0, 0.1, 0.5, 4.1, 0.2, 0.2, 24, 1, 3.4, 0.1],
    ["Kiwifruit, Raw, Fresh", 0.49, 1, 46.4, 0, 0.3, 3.8, 11.3, 2.6, 0.8, 133, 74.5, 19.8, 0.3]
  ];


  for(i = 0 ; i < items.length ; i+=1){
    alert(items[i].length);
  }




  var checkedValues = $('input:checkbox:checked').map(function() {
    return this.value;
  }).get();
  alert(checkedValues);
}