var list =document.getElementById('todo_list');

function add_item(){
    var input=document.getElementById('todo_input');

    var li=document.createElement('li');
    var litext=document.createTextNode(input.value);
    li.appendChild(litext);
    // delete button
    var del = document.createElement('button');
    var deltext=document.createTextNode('Delete');
    del.setAttribute('class','button');
    del.setAttribute('onclick','delete_button(this)');
    del.appendChild(deltext);
    //edit button
    var edit = document.createElement('button');
    var edittext=document.createTextNode('Edit');
    edit.setAttribute('class','button');
    edit.setAttribute('onclick','Edit_btn(this)');
    edit.appendChild(edittext);

    li.appendChild(del);
    li.appendChild(edit);
    list.appendChild(li);
    input.value='';
}

function delete_button(j){
    j.parentNode.remove();
}

function Edit_btn(j){
    var value=j.parentNode.firstChild.nodeValue;
    var edit_value=prompt("Enter Edit Value",j.parentNode.firstChild.nodeValue);
    j.parentNode.firstChild.nodeValue=edit_value;
}

function deleteAll(){
    list.innerHTML='';
}