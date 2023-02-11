
// IPO

// Constants and Variables
let skills;


// Cached elements references
const $button = $("button");
const $ul = $("ul");
const $input = $("input");

// Event listeners
$button.on("click", handleAddSkill);
$ul.on("click", handleDelete);


// Functions
init();

function init(){
    skills = [];
    render();
}

function render(){
//to take list of skills from the skills array and add them to the ul tag
if(!skills.length){ // if no skills present. Need the length becuse it is an empty atrray, therefore it exista sn will return true if you just check for the array
    $ul.css("margin-bottom", "30px");
}
else $ul.css(("margin-bottom", "0px"))
$ul.html(skills) //pass in the list of skills and jq knowsto add them as children
}

function handleAddSkill(){
    //alert("add skill btton clicked")
    // store value from input tag inside a local variable
       const skill = $input.val();
    // check to make sure we have date
    if(skill) {
        // create UI for skill
        const $skill = $(`<li><span>X</span>${skill}</li>`);
        //push skill UI iti skills list
        skills.push($skill);
        // clear input tag's value
        $input.val(""); // method overloading
        // call render()
        render();
    }
    else return; // clean code
    
    
    
}

function handleDelete(){
   this.remove()
}

