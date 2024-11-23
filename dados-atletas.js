class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notasAtleta = notas;
    }
    mostrarAtleta(){
        //
        let Nome = this.obtemNomeAtleta();
        let Idade = this.obtemIdadeAtleta();
        let Peso= this.obtemPesoAtleta();
        let Altura= this.obetemAlturaAtleta();
        let Notas= this.obtemNotasAtleta();
        let Categoria= this.obtemCategoria();
        let IMC= this.obtemIMC();
        let Mediavalida = this.obtemMediaValida();
        //
        return "Nome: " +Nome +"\n"+"Idade: "+Idade+"\n"+"Peso: "+Peso+"\n"+"Altura: "+Altura+"\n"+
        "Notas: "+Notas+"\n"+"Categoria: "+Categoria+"\n"+"IMC: "+IMC+"\n"+"Média válida: "+Mediavalida;
    }  

    calculaCategoria(){
         if(this.idade >= 9 && this.idade <= 11){ 
                  return "Infantil"}
           else if(this.idade >=12 && this.idade <= 13){ 
                  return "Juvenil"}
           else if(this.idade >=14 && this.idade <= 15){
                  return "Intermediário"}
           else if(this.idade >=16 && this.idade <= 30){ 
                  return "Adulto"}
           else{ 
                   return "Sem categoria"};

    }// para calcular a categoria do atleta;
    calculaIMC(){
        return this.obtemPesoAtleta() / (this.obetemAlturaAtleta() *this.obetemAlturaAtleta())
    }// para calcular o IMC do atleta;
    calculaMediaValida(){
        //
        let notasCalculo = this.obtemNotasAtleta();

       // 1 console.log(notasCalculo);
        let maiorNota = 0;
         for (let i = 0; i <notasCalculo.length; i++) {
           if (notasCalculo[i] > maiorNota){
              maiorNota = notasCalculo[i];
           }
         }
         let menorNota = maiorNota;
         for (let i = 0; i <notasCalculo.length; i++) {
            if (notasCalculo[i] < menorNota){
             menorNota = notasCalculo[i];
          }
        }
        //console.log(notasCalculo);
        //console.log(this.notasAtleta)
        for (let i = 0; i <notasCalculo.length; i++) {
          if (notasCalculo[i] == maiorNota){
              notasCalculo[i] = 0;
              i = notasCalculo.length+1
            //   console.log(notasCalculo);
            //   console.log(this.notasAtleta)
       
          }
        }
        //console.log(notasCalculo);
        //console.log(this.notasAtleta)
        for (let i = 0; i <notasCalculo.length; i++) {
          
              if (notasCalculo[i] == menorNota){  
                notasCalculo[i] = 0;
                 i = notasCalculo.length+1 
          } 
        } 
        //console.log(notasCalculo); 
        //console.log(this.notasAtleta)
        let qtd = 0;
        let media = 0;
        for (let i = 0; i <notasCalculo.length; i++) {
        if (notasCalculo[i]>0){
           qtd = qtd+1
           media = media + notasCalculo[i];
         }
        }
        return media/qtd;
    }// para calcular a média válida do atleta.
    obtemNomeAtleta(){
        return this.nome;
    }// que retorna o nome do atleta
    obtemIdadeAtleta(){
        return this.idade;
    }// que retorna a idade do atleta
    obtemPesoAtleta(){
        return this.peso;
    }// que retorna o peso do atleta
    obtemNotasAtleta(){
        return this.notasAtleta.slice();
    }// que retorna as notas do atleta
    obtemCategoria(){
        this.Categoria= this.calculaCategoria();
        return this.Categoria;
    }// que retorna a categoria do atleta
    obtemIMC(){
        this.IMC = this.calculaIMC();
        return this.IMC
    }// que retorna o IMC do atleta
    obtemMediaValida(){
       let mediaValida = this.calculaMediaValida();
       // let mediaValida = 0;
        return  mediaValida;
    }// calcula media valida
    obetemAlturaAtleta(){
        return this.altura;
    }//que retorna a altura do atleta
}
//
// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
//
console.log(atleta.mostrarAtleta());
