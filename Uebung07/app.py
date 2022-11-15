import uvicorn
from fastapi import FastAPI

app = FastAPI()

d = {}
file = open("PLZO_CSV_LV95.csv", encoding="utf-8")
next(file)

for line in file:
    daten = line.strip().split(";")
    ortschaft = daten[0]
    plz = daten[1]
    zusatzziffer = daten[2]
    gmdnamen = daten[3]
    bfs = daten[4]
    kanton = daten[5]
    e = daten[6]
    n = daten[7]
    sprache = daten[8]
    d[gmdnamen] = {"Ortschaftsname": ortschaft,
                        "PLZ": plz,
                        "Zusatzziffer": zusatzziffer,
                        "Gemeindenamen": gmdnamen,
                        "BFS-Nr": bfs,
                        "Kantonskürzel": kanton,
                        "E": e,
                        "N": n,
                        "Sprache": sprache}

file.close()

@app.get("/")
async def root(gemeindenamen: str):
        return d[gemeindenamen]

uvicorn.run(app, host="127.0.0.1", port=8000)