package JAVA.concept;

import java.util.Scanner;

public class greedy4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int K = sc.nextInt();

        int result = 0;

        while (true) {
            if (N % K == 0) {
                N = N / K;
                result++;
            } else {
                int remainder = N % K;
                N = N - remainder;
                result += remainder;

                if (N == 0) {
                    N++;
                    result--;
                }
            }

            if (N == 1) {
                break;
            }
        }
        System.out.println(result);
    }
}
