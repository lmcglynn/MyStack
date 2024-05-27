import pandas as pd
import numpy as np
import tabula
from datetime import datetime

firedata = tabula.read_pdf("CAD Fire Alarm calls 01JAN2018 thru 16NOV2022 (1).xlsx")
firedata.head