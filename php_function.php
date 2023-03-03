 public static function Get_Record_API($myschema='', $table = '', $idkey = '', $idval = '', $executor = '' ,$andkey = '', $andval = '') {
        $di = \Phalcon\DI::getDefault();
        $andkeyf =1;
        $andvalf =1;
        if ($andkey != '' && $andval != '') {
            $andkeyf = $andkey;
            $andvalf = $andval;
        }
        $ret = [];
        $url = 'http://localhost:3000/getCustomand/'.$myschema.'/'.$table.'/'.$executor.'/'.$idval.'/'.$idkey.'/'.$andkeyf.'/'.$andvalf.'';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL,$url);
        $result=curl_exec($ch);
        curl_close($ch);
        $ret = json_decode($result, true);
        return $ret;
    }
