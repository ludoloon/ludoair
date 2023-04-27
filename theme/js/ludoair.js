//Global vars
var gallery_entries;    //DOM Reference

//Page is loaded
$( document ).ready(function() {
    //Get DOM references
    gallery_entries = document.getElementsByClassName("hentry");

    //Loop through all the posts
    /*for(var i = 0; i < gallery_entries.length; i++){
        if(i == 0) { continue; }                //display the most recent photo gallery
        gallery_entries[i].parentElement.style.display="none";//but disable the rest.
    }*/
});

function next_photo_gallery(){
    for(var i=0; i < gallery_entries.length; i++){
        if(gallery_entries[i].parentElement.style.display != "none"){
            gallery_entries[i].parentElement.style.display = "none";
            
            //Loop around the other side
            if(i+1 <= (gallery_entries.length - 1)){
                gallery_entries[i+1].parentElement.style.display = "block";
            } else {
                gallery_entries[0].parentElement.style.display = "block";
            }
            
            break;      //photo found
        }
    }
}

function prev_photo_gallery(){
    //Loop through all the posts
    for(var i=0; i < gallery_entries.length; i++){
        if(gallery_entries[i].parentElement.style.display != "none"){
            //turn off the current entry
            gallery_entries[i].parentElement.style.display = "none";
            
            //Loop around the other side
            if(i-1 >= 0){
                gallery_entries[i-1].parentElement.style.display = "block";
            } else {
                gallery_entries[gallery_entries.length-1].parentElement.style.display = "block";
            }
            
            break;      //photo found
        }
    }
}

function select_photo(){
    //to be made
}

function expand_section(section_name, expand_only = false) {
    const class_name = "folded";
    const section = document.getElementById(section_name+"-section");
    const button = document.getElementById(section_name+"-button");

    if(!section.classList.contains(class_name) && !expand_only){
        section.classList.add(class_name);
        button.innerText = ">";
    } else {
        section.classList.remove(class_name);
        button.innerText = "v";
    }
    section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
