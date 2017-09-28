import csv
with open('hbmaster.csv', mode='r') as infile:
	reader = csv.reader(infile)
	with open('hbmaster_new.csv', mode='w') as outfile:
		writer = csv.writer(outfile)
		# mydict = {rows[0]:rows[1] for rows in reader}
		mydict = dict((rows[0],rows[1]) for rows in reader)