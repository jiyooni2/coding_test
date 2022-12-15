package JAVA.concept;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class dfs1 {
  static int[] dx = {-1, 1, 0, 0};
  static int[] dy = {0, 0, -1, 1};
  static int N;
  static int M;

  public static void main(String[] args) {
    int result = 0;
    Scanner sc = new Scanner(System.in);
    List<List<Integer>> map = new ArrayList<List<Integer>>();

    while (sc.hasNextLine()) {
      String str = sc.nextLine();
      // List<Integer> arr =
      //     new ArrayList<>(Arrays.asList(str.split("")))
      //         .stream().map(el -> Integer.valueOf(el)).collect(Collectors.toList());
      // map.add(arr);
      List<Integer> arr = new ArrayList<>();
      for (int k = 0; k < str.length(); k++) {
        arr.add(str.charAt(k) - '0');
      }
      System.out.println(arr);
      map.add(arr);
    }

    N = map.size();
    M = map.get(0).size();
    System.out.println(map);

    for (int i = 0; i < N; i++) {
      for (int j = 0; j < M; j++) {
        if (map.get(i).get(j) == 0) {
          result++;
          dfs(map, i, j);
        }
      }
    }

    System.out.println("result = " + result);
  }

  public static void dfs(List<List<Integer>> map, int x, int y) {
    map.get(x).set(y, 2);
    System.out.println(x + "," + y + " visited");

    for (int i = 0; i < dx.length; i++) {
      int nx = x + dx[i];
      int ny = y + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < M && map.get(nx).get(ny) == 0) {
        dfs(map, nx, ny);
      }
    }
  }
}
