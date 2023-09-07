#include <stdio.h>

    void showMainDiagonal(int size, int array[size][size]){
        
        printf("Los elementos de la diagonal principal del array son los siguientes: \n");
        for(int i = 0; i < size; i++){
            printf("%d\n", array[i][i]);
        }
    }
    
    void showSecondaryDiagonal(int size, int array[size][size]){
        
        int j = size - 1;
        
        printf("Los elementos de la diagonal secundaria del array son los siguientes: \n");
        for(int i = 0; i < size; i++){
            printf("%d\n", array[i][j]);
            j--;
        }
    }

int main() {
    // Write C code here
    int size;
    
    printf("Ingrese que dimensiones desea que tenga su array bidimensional, que sea mayor o igual a 2: ");
    scanf("%d", &size);
    
    while(size < 2){
        printf("Ingrese que dimensiones desea que tenga su array bidimensional, que sea mayor o igual a 2: ");
        scanf("%d", &size);
    }
    
    int array[size][size];
    
    printf("Generando array aleatorio: \n");
    
    for(int i = 0; i < size; i++){
        for(int j = 0; j < size ; j++){
        array[i][j] = rand() % 10;
        }
    }
    
    printf("Imprimiendo array.... \n");
    for(int i = 0; i < size; i++){
        for(int j = 0; j < size  ; j++){
        printf("%d", array[i][j]);
        printf(" ");
        }
        printf("\n");
    }
    
    showMainDiagonal(size, array);
    showSecondaryDiagonal(size, array);
    return 0;

}