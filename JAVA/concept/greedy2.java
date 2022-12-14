package JAVA.concept;

import java.util.Arrays;
import java.util.Scanner;

public class greedy2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();
        int K = sc.nextInt();

        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }

        Arrays.sort(arr);
        int first = arr[N - 1];
        int second = arr[N - 2];

        int result = first * (M - (M / (K + 1))) + second * M / (K + 1);
        System.out.println(result);
    }
}
