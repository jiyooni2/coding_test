package JAVA.concept;

import java.util.Arrays;
import java.util.Scanner;

public class greedy3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();

        int[][] arr = new int[N][M];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        int result = -1;

        for (int[] el : arr) {
            Arrays.sort(el);
            result = Math.max(result, el[0]);
        }

        System.out.println(result);

    }
}
