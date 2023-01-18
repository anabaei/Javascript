import sys
import base64
from captcha.audio import AudioCaptcha
from captcha.image import ImageCaptcha

num = sys.argv[1]
audioCaptcha = AudioCaptcha()
audioData = audioCaptcha.generate(num)
base64EncodedPngDataAudio = base64.b64encode(audioData).decode("utf-8")

imageCaptcha = ImageCaptcha(
    width=180,
    height=180,
    font_color='#CD5C5C',
    font_sizes=(100, 100, 100))
pngData = imageCaptcha.generate(num).getvalue()
base64EncodedPngDataImage = base64.b64encode(pngData).decode("utf-8")

captcha = 'data:image/png;charset=utf-8;base64,'+ base64EncodedPngDataImage + ',,' + 'data:audio/wav;charset=utf-8;base64,' + base64EncodedPngDataAudio
print(captcha)
sys.stdout.flush()
