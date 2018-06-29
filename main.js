function my(a) {
	var r1, r2, r3, q1, q2, q3, q4, r4;
	q1 = "select distinct sname from student s,class c,faculty f,enrolled e where s.snum=e.snum and e.cname=c.name and s.level='jr' and f.fname='harshit' and f.fid=c.fid;";
	q2 = "select distinct name from class where room='r128' or name in (select e.cname from enrolled e group by e.cname having count(*)>=5);";
	q3 = "select distinct s.sname from student s where s.snum in (select e1.snum from enrolled e1,enrolled e2,class c1,class c2 where e1.snum=e2.snum and e1.cname<>e2.cname and e1.cname=c1.name and e2.cname=c2.name and c1.meetsat=c2.meetsat);";
	q4 = "select f.fname,f.fid from faculty f where f.fid in (select fid from class group by fid having count(*)=(select count(distinct room) from class));";
	switch (a) {
		case 'q1':
			r1 = confirm("FIND NAMES OF ALL JUNIORS WHO ARE ENROLLED IN A CLASS TAUGHT BY PROF.HARSHIT.\n" + "Want to process this query?\n");
			break;
		case 'q2':
			r2 = confirm("FIND NAMES OF ALL CLASSES THAT EITHER MEET IN ROOM R128 OR HAVE 5 OR MORE STUDENTS ENROLLED.\n" + "Want to process this query?\n");
			break;
		case 'q3':
			r3 = confirm("FIND NAMES OF ALL STUDENTS WHO ARE ENROLLED IN 2 CLASSES THAT MEET AT SAME TIME.\nWant to process this query?\n");
			break;
		case 'q4':
			r4 = confirm("FIND NAMES OF FACULTY MEMBERS WHO TEACH IN EVERY ROOM IN WHICH SOME CLASS IS TAUGHT.\nWant to process this query?\n");
			break;

		default:
			break;
	}
	if (r1)
		document.getElementById('1ip').value = q1;
	if (r2)
		document.getElementById('1ip').value = q2;
	if (r3)
		document.getElementById('1ip').value = q3;
	if (r4)
		document.getElementById('1ip').value = q4;
}

function mya(a) {
	var r1, r2, r3, q1, q2, q3, q4, q5, q6, r4, r5, r6;
	q1 = "select distinct a.aname from aircraft a,certified c,employees e where a.aid=c.aid and c.eid=e.eid and not exists (select * from employees e1 where e1.eid=e.eid and e1.salary<80000);";
	q2 = "select c.eid,max(cruisingrange) from certified c,aircraft a where c.aid=a.aid group by c.eid having count(*)>3;";
	q3 = "select distinct e.ename from employees e where e.salary<(select min(f.price) from flight f where f.frm='Bangalore' and f.too='Frankfurt');";
	q4 = "select a.aid,a.aname,avg(e.salary) from aircraft a,certified c,employees e where a.aid=c.aid and c.eid=e.eid and a.cruisingrange>1000 group by a.aid,a.aname;";
	q5 = "select distinct e.ename from employees e,aircraft a,certified c where e.eid=c.eid and c.aid=a.aid and a.aname like '%Boeing%';";
	q6 = "select a.aid from aircraft a where a.cruisingrange> (select min(f.distance) from flight f where f.frm='Bangalore' and f.too='Delhi');";
	switch (a) {
		case 'q1':
			r1 = confirm("Find the names of aircraft such that all pilots certified to operate them have salaries more than Rs80,000.\n" + "Want to process this query?\n");
			break;
		case 'q2':
			r2 = confirm("For each pilot who is certified for more than three aircrafts,find the eid and the maximum cruisingrange of the aircraft for which he/she is certified.\n" + "Want to process this query?\n");
			break;
		case 'q3':
			r3 = confirm(".Find the names of all pilots whose salary is less than the price of the cheapest route from Bangalore to Frankfurt.\nWant to process this query?\n");
			break;
		case 'q4':
			r4 = confirm("For all aircrafts with cruisingrange over 1000 kms,find the name of the aircraft and the average salary of all pilots certified for this aircraft\nWant to process this query?\n");
			break;
		case 'q5':
			r5 = confirm("Find the names of pilots certified for some Boeing aircraft.\nWant to process this query?\n");
			break;
		case 'q6':
			r6 = confirm("Find the aid's of all aircraft that can be used on routes from Bangalore to Delhi.\nWant to process this query?\n");
			break;

		default:
			break;
	}
	if (r1)
		document.getElementById('ip2').value = q1;
	if (r2)
		document.getElementById('ip2').value = q2;
	if (r3)
		document.getElementById('ip2').value = q3;
	if (r4)
		document.getElementById('ip2').value = q4;
	if (r5)
		document.getElementById('ip2').value = q5;
	if (r6)
		document.getElementById('ip2').value = q6;
}

function myb(a) {
	var r4, q4, q5, r5;
	q4 = "select c.courseno,t.book_isbn,t.book_title from course c,book_adoption ba,text t where c.courseno=ba.courseno and ba.book_isbn=t.book_isbn and c.dept='CSE' and 2<(select count(book_isbn) from book_adoption b where c.courseno=b.courseno) order by t.book_title;";
	q5 = "select distinct c.dept from course c where c.dept in ( select c.dept from course c,book_adoption b,text t where c.courseno=b.courseno and t.book_isbn=b.book_isbn and t.publisher='PEARSON') and c.dept not in (select c.dept from course c,book_adoption b,text t where c.courseno=b.courseno and t.book_isbn=b.book_isbn and t.publisher!='PEARSON');";
	switch (a) {
		case 'q4':
			r4 = confirm("Produce a list of text books (include Course #, Book-ISBN, Book-title) in the alphabetical order for courses offered by the 'CS' department that use more than two books..\nWant to process this query?\n");
			break;
		case 'q5':
			r5 = confirm("List any department that has all its adopted books published by a specific publisher.\nWant to process this query?\n");
			break;

		default:
			break;
	}
	if (r4)
		document.getElementById('3ip').value = q4;
	if (r5)
		document.getElementById('3ip').value = q5;
}

function myc(a) {
	var q3, r3, r4, q4, q5, r5;
	q3 = "select * from author1 where author1_id in (select author1_id from catalogue1 where year>2000 and price> (select avg(price) from catalogue1) group by author1_id having count(*)>1);";
	q4 = "select author1_name from author1 a,catalogue1 c where a.author1_id=c.author1_id and book_id in (select book_id from orderdetails1 where quantity= (select max(quantity) from orderdetails1));";
	q5 = "update catalogue1 set price=1.1*price where publisher1_id in (select publisher1_id from publisher1 where publisher1_name='pearson');";
	switch (a) {
		case 'q3':
			r3 = confirm("Give the details of the authors who have 2 or more books in the catalog and the price of the books is greater than the average price of the books in the catalog and the year of publication is after 2000.\nWant to process this query?\n");
			break;
		case 'q4':
			r4 = confirm("Find the author1 of the book which has maximum sales.\nWant to process this query?\n");
			break;
		case 'q5':
			r5 = confirm("Demonstrate how you increase the price of books published by a specific publisher1 by 10%.\nWant to process this query?\n");
			break;

		default:
			break;
	}
	if (r3)
		document.getElementById('4ip').value = q3;

	if (r4)
		document.getElementById('4ip').value = q4;
	if (r5)
		document.getElementById('4ip').value = q5;
}

function myd(a) {
	var q3, r3, r4, q4, q5, r5;
	q3 = "SELECT customer_name FROM depositor d,account a WHERE d.accno=a.accno AND a.branch_name='Main' GROUP BY d.customer_name HAVING COUNT(d.customer_name)>=2;";
	q4 = "SELECT d.customer_name FROM account a,branch b,depositor d WHERE b.branch_name=a.branch_name AND a.accno=d.accno AND b.branch_city='c3' GROUP BY d.customer_name HAVING COUNT(distinct b.branch_name)=(select count(branch_name) from branch";
	q5 = "DELETE FROM account where branch_name IN(SELECT branch_name FROM branch WHERE branch_city='c5');";
	switch (a) {
		case 'q3':
			r3 = confirm("Find all the customers who have at least two accounts at the Main branch.\nWant to process this query?\n");
			break;
		case 'q4':
			r4 = confirm("Find all the customers who have an account at all the branches located in a specific city..\nWant to process this query?\n");
			break;
		case 'q5':
			r5 = confirm("Demonstrate how you delete all account tuples at every branch located in a specific city.\nWant to process this query?\n");
			break;

		default:
			break;
	}
	if (r3)
		document.getElementById('5ip').value = q3;

	if (r4)
		document.getElementById('5ip').value = q4;
	if (r5)
		document.getElementById('5ip').value = q5;
}

function quer(qtn) {
	var span = document.getElementById('close');
	span.onclick = function () {
		document.getElementById('question-modal').style.display = "none";
		document.getElementById('modal-content1').style.display = "none";
		document.getElementById('modal-content2').style.display = "none";
		document.getElementById('modal-content3').style.display = "none";
		document.getElementById('modal-content4').style.display = "none";
		document.getElementById('modal-content5').style.display = "none";
	}
	document.getElementById('question-modal').style.display = "block";
	switch (qtn) {
		case 1:
			document.getElementById('modal-content1').style.display = "block";
			break;
		case 2:
			{
				document.getElementById('modal-content2').style.display = "block";
				break;
			}
		case 3:
			{
				document.getElementById('modal-content3').style.display = "block";
				break;
			}
		case 4:
			{
				document.getElementById('modal-content4').style.display = "block";
				break;
			}
		case 5:
			{
				document.getElementById('modal-content5').style.display = "block";
				break;
			}
		default:
			break;
	}
}