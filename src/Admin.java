import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Admin {



    public static void main(String[] args) {
        List<Integer> employee = new ArrayList<>();
        employee.add(1);
        System.out.println(employee);


    ArrayList<String> students = new ArrayList<String>();
    students.addAll(Arrays.asList(new String[]{"ok","hi"}));
        System.out.println(students);
    }
}
