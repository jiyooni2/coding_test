package JAVA.concept;

import java.util.Arrays;
import java.util.Scanner;

public class implementation4 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();

        int[][] map = new int[N][M];

        int x = sc.nextInt();
        int y = sc.nextInt();
        int direction = sc.nextInt();

        int[] dx = { -1, 0, 1, 0 };
        int[] dy = { 0, 1, 0, -1 };

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                map[i][j] = sc.nextInt();
            }
        }

        System.out.println(Arrays.deepToString(map));

        int result = 1;
        map[x][y] = 2;

        while (true) {
            boolean isVisited = false;

            for (int j = 0; j < 3; j++) {
                direction = (direction + 1) % 4;
                int nx = x + dx[direction];
                int ny = y + dy[direction];

                if (0 <= nx && nx < N && 0 <= ny && ny < M && map[nx][ny] == 0) {
                    map[nx][ny] = 2;
                    result++;
                    x = nx;
                    y = ny;
                    isVisited = true;
                    System.out.println("visited");
                    break;
                }
            }

            if (!isVisited) {
                direction = (direction + 1) % 4;
                x = x - dx[direction];
                y = y - dy[direction];

                if (map[x][y] == 1) {
                    break;
                }
            }
        }

        System.out.println(result);

    }
}
