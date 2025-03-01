"""Usage:

from app.env import Mode, mode

if mode == Mode.PROD:
    print("Running in deployed service")
else:
    print("Running in development workspace")
"""

import os
from enum import Enum


class Mode(str, Enum):
    DEV = "development"
    PROD = "production"


mode = Mode.PROD if os.environ.get("DATABUTTON_SERVICE_TYPE") == "prodx" else Mode.DEV

__all__ = [
    "Mode",
    "mode",
]
