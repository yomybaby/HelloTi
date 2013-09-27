# 실습용 앱 실행방법
1. xml에서 ListView를 사용했기 때문에 Alloy를 1.2.x 이상 버전이 필요하다. (최신버전 설치)
1. 먼저 Alloy 프로젝트이면서 ACS가 활성화된 Ti Mobile 프로젝트를 하나 만듭니다.
1. tiapp.xml을 열어 `<android xmlns:android="http://schemas.android.com/apk/res/android"/>`는 삭제하고 아래 코드를 붙여넣습니다. (FACEBOOK_APP_ID는 본인의 것으로 교체합니다.)

		<android xmlns:android="http://schemas.android.com/apk/res/android">
			<tool-api-level>16</tool-api-level>
			<manifest>
				<application android:theme="@android:style/Theme.Holo.Light"/>
			</manifest>
		</android>
		<ios>
		    <plist>
		        <dict>
	    	        <key>UIAppFonts</key>
	        	    <array>
	            	    <string>fonts/fontawesome-webfont.ttf</string>
		            </array>
		        </dict>
		    </plist>
		</ios>
		<property name="ti.facebook.appid">FACEBOOK_APP_ID</property>
		
1. alloy.js에서도 FACEBOOK_APP_ID를 본인의 것으로 교체합니다.
2. 프로젝트를 클린하고 실행해 봅니다.

## 주의사항
* Facebook 개발자 사이트에서 앱을 만들때 bundle id와 titanium app id가 일치해야하면 native ios app에 facebook login 설정을 체크해줍니다.
