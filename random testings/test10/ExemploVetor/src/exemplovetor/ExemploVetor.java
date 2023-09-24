package exemplovetor;

import java.util.Scanner;

public class ExemploVetor {

    public static void main(String[] args) {
        //DECLARAÇÃO DE VARIÁVEIS
        String[] nomes;     // nomes array created
        nomes = new String[5];
        double[] notas = new double[5];
        double soma = 0, media = 0;
        int j = 1;
          
        //LEITURA DA NOTA DE CADA ALUNO
        for (int i = 0; i < 4; i++) {
            System.out.println("Entre com o nome do aluno nº" + (i+1));
            nomes[i] = new Scanner(System.in).nextLine();
            System.out.println("Entre com a nota do aluno nº" + (i+1));
            notas[i] = new Scanner(System.in).nextDouble();
            soma = soma + notas[i];
            j=j+1;
        }
        
        media = soma / 5;
        
        //APRESENTAÇÃO DOS RESULTADOS
        System.out.println("[A média da turma é:" + media + "]");
    }
    
}
