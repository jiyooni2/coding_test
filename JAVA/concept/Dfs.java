package concept;

import java.util.ArrayList;
import java.util.Arrays;

public class Dfs {
  public static boolean[] visited = new boolean[9];
  public static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();

  public static void main(String[] args) {
    for (int i = 0; i < 9; i++) {
      graph.add(new ArrayList<Integer>());
    }

    graph.get(1).addAll(Arrays.asList(2, 3, 8));
    graph.get(2).addAll(Arrays.asList(1, 7));
    graph.get(3).addAll(Arrays.asList(1, 4, 5));
    graph.get(4).addAll(Arrays.asList(3, 5));
    graph.get(5).addAll(Arrays.asList(3, 4));
    graph.get(6).add(7);
    graph.get(7).addAll(Arrays.asList(2, 6, 8));
    graph.get(8).addAll(Arrays.asList(1, 7));

    dfsFunction(1);
  }

  public static void dfsFunction(int x) {
    // 1. 방문처리 및 출력
    visited[x] = true;
    System.out.print(x + " ");

    // 2. 인접 노드 중
    for (int i : graph.get(x)) {
      // 방문하지 않은 노드가 있다면, 거기서 다시 dfs
      if (!visited[i]) {
        dfsFunction(i);
      }
    }

    // for(int i=0;i<graph.get(x).size();i++){
    // int y = graph.get(x).get(i);
    // if(!visited[y]){
    // dfsFunction(y);
    // }
    // }
  }

  public static void dfsFunction2(ArrayList<ArrayList<Integer>> graph, int x, boolean[] visited) {}
}
