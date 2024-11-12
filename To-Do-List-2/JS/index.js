let aux = 1;

function CriarTarefa(){
    let table = document.getElementById('table')
    let Tarefa = document.getElementById('AddTarefa').value;
    if(Tarefa === ''){
        alert('O Campo de adicionar tarefa não pode estar vazio');
        return;
    }

    let input =  document.createElement('input');
    input.id = 'checkbox';
    input.type = 'checkbox';

    let label = document.createElement('label');
    label.for = 'checkbox';
    label.textContent = Tarefa;

    let tr = document.createElement('tr');
    label.style.padding = '5px';
    tr.style.border = '1px solid rgb(122, 119, 119)';
    tr.style.width = '100%';
    tr.style.borderCollapse = 'collapse';
    tr.style.height = '30px'
    tr.ariaLabel = `${aux+1}`;
    if(aux % 2 == 1){
        tr.style = 'background-color: #F6F6F5'
    }else{
        tr.style = 'background-color: white';
    }
    
    let td = document.createElement('td');
    td.style.width = '100%';
    td.style.border = '1px solid rgb(122, 119, 119)';
    td.style.borderCollapse = 'collapse'
    td.style.height = '30px'

    td.appendChild(input);
    td.appendChild(label);
    tr.appendChild(td);
    table.appendChild(tr);

    document.getElementById('AddTarefa').value = '';
    aux++;
}


function ExcluirTarefa(){
    let Exaux = 0;
    console.log(aux);
    for(let i = 1; i <= aux; i++){
        let tarefa = document.querySelector(`tr[aria-label="${i}"]`);
        if(tarefa){
            const selectedInput = tarefa.querySelector(`input:checked`);
            if(selectedInput){
                tarefa.remove();
                Exaux ++;
                aux--;
            }
        }
    }
    if(Exaux === 0){
        alert("Você deve selecionar uma tarefa para excluí-la");
    }   
}

function EditarTarefa(){
    console.log(aux);
    for(let i = 0; i <= aux; i++){
        let tarefa = document.querySelector(`tr[aria-label="${i}"]`);
        if(tarefa){
            let selectedInput = tarefa.querySelector(`input:checked`);
            let inputLabel = tarefa.querySelector(`label`).textContent;
            if(selectedInput){
                let edicao = prompt(`Digite o novo nome para a tarefa ${inputLabel}: `);
                while(edicao === null || edicao === " "){
                    let resp = confirm("Deseja continuar a edição ?");
                    if(resp){
                        edicao = prompt(`Digite o novo nome para a tarefa ${inputLabel}: `);
                    }else{
                        return;
                    }
                }
                if(edicao !== null){
                    let newlabel = tarefa.querySelector('label');
                    newlabel.textContent = edicao;
                }
                
            }else{
                alert('Você deve selecionar a tarefa antes de clicar em editar');
                break;
            }
        }
    }
}