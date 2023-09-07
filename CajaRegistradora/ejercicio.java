package CajaRegistradora;

import java.util.Scanner;

public class ejercicio {
    public static void main(String[] args) {
        
        int[] billetes = {20000, 10000, 5000, 2000, 1000};

        Scanner s = new Scanner(System.in);
        
        System.out.println("Ingrese el monto:");
        
        int monto = sc.nextInt();
        int contador = 0;

        for(int i = 0; i < billetes.length; i++){
            contador = (int) monto / billetes[i];
            monto -= billetes[i] * contador;
            
        }
        System.out.println("Se entregan "+contador+ " billetes");

    }
}
