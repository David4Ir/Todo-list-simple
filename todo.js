let todo = () => {
    var input = document.getElementById('input').value;
    if (input == '') {
        //alert('please enter a task');
        this.RegisterClientScriptBlock(typeof(string), "key",  string.Format("alert('{0}');", ex.Message), true);

    } else {
        document.getElementById('input').value = '';
        //Add
        var pTag = document.createElement('p');
        var tasktag = document.createElement('span');
        var task = document.createTextNode(input);

        tasktag.appendChild(task);
        pTag.appendChild(tasktag);

        var result = document.getElementById('result');
        result.appendChild(pTag);

        //remove
        var remtag = document.createElement('span');
        var remtext = document.createTextNode('   X');
        remtag.style.color = 'red';
        remtag.appendChild(remtext);
        pTag.appendChild(remtag);

        //Done

        pTag.addEventListener('click', done);
        function done() {
           tasktag.style.textDecoration = 'line-through';
    
        }

        //rem att
        var remove = document.createAttribute('onclick');
        remove.value = 'this.parentNode.remove();';
        remtag.setAttributeNode(remove);
    }
};
