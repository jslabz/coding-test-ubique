var renderArr = [1,2,3,4,5,6,7,8,9];
renderTile(renderArr);
function shuffle(){
    renderArr.sort(function(){ return Math.random() - 0.5});
    renderTile(renderArr);    
}

function sort(){
    renderArr.sort();
    renderTile(renderArr);    
}

function renderTile(arr){
    var list ='';
    for(var i =0;i<arr.length;i++){
        list += '<div class="tile-wrapper-inner"><div class="sm tile-clr-'+arr[i]+'"></div><div class="tile tile-clr-'+arr[i]+'">'+arr[i]+'</div></div>'
    }
    document.querySelector('.tile-wrapper').innerHTML= list;
}

