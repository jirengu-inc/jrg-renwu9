## �ʴ�
### һ��CSS��JS����ҳ�еķ���˳���������ģ�
-  ʹ��link��ǩ��css��ʽ����ڶ���
-  ��`<script></script>`����β��
### �������Ͱ�����FOUC
1. �Ȱ���ʽ�������������Ⱦ�������
2. �Ȱ����ݼ��س����ȷ�����ʽ��ʱ����ȥ����һ��������
- �����1������������css���ں��棬��Ϊ�ȴ�ʱ��������������ʱ�䣬����ֳ�ʱ�����,�����ʹ��@import��ǩ����cssҲ����ְ�������[@import������](http://www.jianshu.com/p/d35dca8dea3e)
- �����2������������Flash of Unstyled Content
- ��δ��js���ڵײ����ű����ò��������������������ز����֣����°����������ݼ��ص�һ��ͣס�������
### ����async��defer��������ʲô����ʲô����
- ���ã������js����`<head>`�ڣ�ayync��defer�ӳټ���script.js��ʵ���첽���ط�ֹ�����������ݳ��ֺ���������ء�
- ����
1. defer�ӳٵ��ĵ���������ʾ��ִ�У���˳������ʵ���������һ����˳��ִ��Ҳ��һ����DomContentloadִ��֮ǰ��ɡ�����δ���϶���Խ��Խ���ECMA���淶����
2. async������js������ִ�У���˳��˭��˭���ϡ�
3. �����ԣ�async>IE9��defer<=9����bug.
����dom�Ľű�����async��defer(���߸ò��ֽű��ص�)
ִ�нźͺ�ҳ��ִ�й���һ���̣߳�����ͬʱ���С�
[Я��](http://ued.ctrip.com/blog/script-defer-and-async.html#)
[segmentfault1](https://segmentfault.com/q/1010000000640869)
[segmentfault2](https://segmentfault.com/a/1190000006778717)
### �ġ�������ҳ����Ⱦ����
- ����HTML��ǩ������DOM��
- ����CSS��ǩ������CSSOM��
- ��DOM��CSSOM��ϳ���Ⱦ��(render tree)
- ����Ⱦ���Ļ����Ͻ���Layout����λ����ʹ�С���Ƿ��У�����positiono��verflow��z-index����
- ��ÿ���ڵ���Ƶ���Ļ��
- ĳЩ��̬�޸�dom���Ի���css���Ե�js�ᵼ������layout
- Reflow������֤������Render Tree��layout��Repaint����layout
[�ο�](http://coolshell.cn/articles/9666.html)
[How to browsers work����](http://www.cnblogs.com/lhb25/p/how-browsers-work.html#CSS_parsing)
### �塢JavaScript �����˼�����������? ��Щ�Ǽ�����?��Щ�Ǹ�������?
- 6+Symbol����
- �򵥣�number/string/boolean/undefined/null
- ���ӣ�object{object����/����/����}
### ����NaN��undefined��null�ֱ����ʲô?
- NaN��not a number��:������number���ͣ���js������ֵ����Ҫ�����ڽ��ַ������������ֳ���ĳ��ϡ�
- underfined��null������������������͡�
- undefined:ϵͳΪ�����������ڴ��ַ��ָ�롣��δ��������ֵ��
1. ����ú���ʱ�ô��ݵĲ���δ�ṩ
2. ����û�и�ֵ������
3. ����û�з���ֵʱĬ�Ϸ���undefined
- null:��ָ�롣��ʾһ��ֵ�������ˣ�����Ϊ��ֵ�����ô���ֵ����Ϊ�ա����磬���ú���ʱ������Ҫ����ĳ����������ʱ�Ϳ��Դ���null��
### �ߡ�typeof��instanceof�����ú�����?
- ���߶�����������
- typeof�����������һ��ֵ���������ͣ�number|string|boolean|function|undefined|object��
- instanceof�����:����object��������{window|����|����|null}instanceof�������������һ����������ԭ�������Ƿ����һ�����캯���� prototype ���ԡ�