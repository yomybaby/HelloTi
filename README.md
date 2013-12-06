# 실습용 앱 실행방법
이 문서는 2013년 12월 05일 실시한 Titanium 강좌의 실습 내용을 기반으로 작성되었습니다. 이전에 실습 하셨던 분들은 수강하신 날짜의 tag로 checkout하여 확인하여 참고하시기 바랍니다.

ACS(Appcelerator Cloud Service) 서버를 사용하는 실습이므로 먼저 개인별로 프로젝트를 ACS를 활성화하여 생성하고 해당 프로젝트의 guid 값을 가지고 있는 tiapp.xml 과 manifest 파일을 사용합니다.

### tiapp.xml 및 manifest파일 준비하기
1. 먼저 Alloy 프로젝트이면서 ACS가 활성화된 Ti Mobile 프로젝트를 하나 만듭니다.
	* ProjectName : HelloTi
	* appid : net.bloteracademy.helloti
	* Cloud Setting : Cloud-enable this application을 체크한다.
	* 원하는 development target을 선택한다.
	* Finish 클릭
1. tiapp.xml을 열어 `<android xmlns:android="http://schemas.android.com/apk/res/android"/>`는 삭제하고 아래 코드를 붙여넣습니다.

		<android xmlns:android="http://schemas.android.com/apk/res/android">
			<tool-api-level>16</tool-api-level>
			<manifest>
				<application android:theme="@android:style/Theme.Holo.Light"/>
			</manifest>
		</android>
		<property name="ti.facebook.appid">388624334572668</property>
		
1. toop-api-level은 본인에게 설치된 android sdk의 version으로 선택한다.(4.1.2 추천)
1. ** tiapp.xml과 manifest 파일을 다른 폴더에 복사해 둡니다. **
1. studio에서 해당 프로젝트를 삭제합니다. (파일까지 삭제되도록 `delete project contents on disk`를 체크합니다.

### 실습용 파일 clone

1. 터미널에서 Titanium Workspace 폴더로 이동하여 다음 명령어를 칩니다.

		git clone git@github.com:yomybaby/HelloTi.git
		git fetch --tags
	* git이 설치되어 있지 않은 경우  http://git-scm.com/downloads 에서 해당하는 os버전으로 설치합니다.

2. 원하는 branch로 checkout 합니다.
	* 예) `git checkout 20131205 origin/20131205`
3. Titanium Studio 메뉴에서 File - Import를 선택하고 'Existing Mobile Project'를 선택한 후 Next를 누릅니다.
4. 방금 클론 받은 HelloTi 폴더를 Project directory로 선택하고 
5. Finish 선택
6. Run하여 정상적으로 앱이 실행되는지 확인합니다.

## 주의사항
* Facebook 개발자 사이트에서 앱을 만들때 bundle id와 titanium app id가 일치해야하면 native ios app에 facebook login 설정을 체크해줍니다.
